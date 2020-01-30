<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Task::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string'
        ]);

        if (Task::create($data)) {
            return response(['status' => 'success']);
        } else {
            return response(['status' => 'error']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        return $task;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $data = $request->validate([
            'title' => 'required|string'
        ]);

        if ($task->update($data)) {
            return response(['status' => 'success']);
        } else {
            return response(['status' => 'error']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        if ($task->delete()) {
            return response(['status' => 'success']);
        } else {
            return response(['status' => 'error']);
        }
    }

    public function completeTask(Task $task)
    {
        $task->status = true;

        if ($task->save()) {
            return response(['status' => 'success']);
        } else {
            return response(['status' => 'error']);
        }
    }

    public function undoCompletedTask(Task $task)
    {
        $task->status = false;

        if ($task->save()) {
            return response(['status' => 'success']);
        } else {
            return response(['status' => 'error']);
        }
    }

    public function viewCompleted()
    {
        return Task::where('status', 1)->get();
    }

    public function viewNotCompleted()
    {
        return Task::where('status', 0)->get();
    }

    public function clearCompleted()
    {
        $tasks = Task::where('status', 1)->pluck('id');

        if (Task::destroy($tasks)) {
            return response(['status' => 'success']);
        } else {
            return response(['status' => 'error']);
        }
    }
}
